import React from "react";
import { useRouter } from "next/router";
import styles from "./profile.module.css";
import { Button } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

const Profile = ({ profile }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.create__edit__profile__btn}>
          <Button
            variant="outlined"
            size="small"
            endIcon={<AddCircleOutline />}
            onClick={() =>
              router.push({
                pathname: "/profile/create",
              })
            }
          >
            {!profile ? `Create New Profile` : `Edit Profile`}
          </Button>
        </div>

        <div className={styles.profile__wrapper}>
          {profile ? (
            <div className={styles.profile}>
              <h1>Profile</h1>
              <div className={styles.profile__detail}>
                Name: <span>{profile?.name}</span>
              </div>
              <div className={styles.profile__detail}>
                Address: <span>{profile?.address}</span>
              </div>
              <div className={styles.profile__detail}>
                Age Range: <span>{profile?.ageRange}</span>
              </div>
            </div>
          ) : (
            <p>**No Profile Found**</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
