package com.spike.userinformationmanagement.pojo;

import java.util.Base64;

public class Avatar {
    private String avatarBase64;
    private byte[] avatar;

    public void setAvatarBase64(String avatarBase64) {
        this.avatarBase64 = avatarBase64;
    }

    public void setAvatar(byte[] avatar) {
        this.avatar = avatar;
    }

    public String getAvatarBase64() {
        return Base64.getEncoder().encodeToString(avatar);
    }

    public byte[] getAvatar() {
        return Base64.getDecoder().decode(avatarBase64);
    }
}
