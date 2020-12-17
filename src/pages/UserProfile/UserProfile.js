import React, { useEffect, useState, useMemo, useRef } from "react";
import { useAuth, useUserId } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUserById, asyncUpdateProfile } from "../../store/user/actions";

import defaultAvatar from "../../assets/images/default-avatar.png";

const initStateObjFileAvatar = {
	file: null,
	previewAvatar: "",
};

const UserProfile = () => {
	useAuth();
	const userid = useUserId();
	const dispatch = useDispatch();
	const inputFile = useRef(null);
	const userCurrent = useSelector((state) => state.User.currentUser);
	const [userInfo, setUserInfo] = useState(null);
	const [objFileAvatar, setObjectFileAvatar] = useState(
		initStateObjFileAvatar
	);

	useEffect(() => {
		setUserInfo(userCurrent);
	}, [userCurrent]);

	useEffect(() => {
		dispatch(asyncGetUserById({ userid })).then((res) => {
			if (!res.success) {
				alert("Có lỗi xảy ra. Vui lòng thử lại");
			}
		});
	}, [userid, dispatch]);

	const finalAvatar = useMemo(() => {
		if (!objFileAvatar.file) {
			return userInfo?.profilepicture || defaultAvatar;
		}

		if (objFileAvatar.file && objFileAvatar.previewAvatar) {
			return objFileAvatar.previewAvatar;
		}
	}, [userInfo, objFileAvatar]);

	const onChangeData = (keyField) => (e) => {
		setUserInfo({
			...userInfo,
			[keyField]: e.target.value,
		});
	};

	const onChangeFile = (e) => {
		const listFiles = e.target.files;

		if (listFiles.length) {
			const file = listFiles[0];

			const reader = new FileReader();

			reader.onloadend = () => {
				setObjectFileAvatar({
					file,
					previewAvatar: reader.result,
				});
			};

			reader.readAsDataURL(file);
		}
	};

	const handleInputFileAvatar = () => {
		inputFile.current.click();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			avatar: objFileAvatar.file,
			fullname: userInfo.fullname,
			gender: userInfo.gender,
			description: userInfo.description,
		};
		dispatch(asyncUpdateProfile(data)).then((res) => {
			if (res.success) {
				setObjectFileAvatar(initStateObjFileAvatar);
			}
		});
	};

	return (
		<main>
			<div className="ass1-login">
				<div className="ass1-login__content">
					<p>Profile</p>
					<div className="ass1-login__form">
						<div className="avatar">
							<img
								onClick={handleInputFileAvatar}
								src={finalAvatar}
								alt=""
							/>
						</div>
						<form action="#">
							<input
								onChange={onChangeData("fullname")}
								value={userInfo?.fullname || ""}
								type="text"
								className="form-control"
								placeholder="Tên ..."
								required
							/>
							<select
								value={userInfo?.gender || ""}
								className="form-control"
								onChange={onChangeData("gender")}
							>
								<option value>Giới tính</option>
								<option value="nam">Nam</option>
								<option value="nu">Nữ</option>
							</select>
							<input
								ref={inputFile}
								type="file"
								name="avatar"
								placeholder="Ảnh đại diện"
								className="form-control"
								onChange={onChangeFile}
							/>
							<textarea
								onChange={onChangeData("description")}
								className="form-control"
								cols={30}
								rows={5}
								placeholder="Mô tả ngắn ..."
								defaultValue={userInfo?.description || ""}
							/>
							<div className="ass1-login__send justify-content-center">
								<button
									onClick={handleSubmit}
									type="submit"
									className="ass1-btn"
								>
									Cập nhật
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
};

export default UserProfile;
