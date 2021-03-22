package com.spike.userinformationmanagement.pojo;

import sun.misc.BASE64Encoder;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
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
        return this.avatarBase64;
    }

    public byte[] getAvatar() {
        return this.avatar;
    }

    public Boolean saveAvatar(Integer id) {
        StringBuffer avatarFileName = new StringBuffer("avatars/");
        avatarFileName.append(id);
        avatarFileName.append(".jpg");
        File avatarFile = new File(avatarFileName.toString());
        try {
            this.avatar = Base64.getDecoder().decode(this.avatarBase64);
            FileOutputStream fileOutputStream = new FileOutputStream(avatarFile);
            fileOutputStream.write(avatar);
            fileOutputStream.flush();
            fileOutputStream.close();

        }catch (IOException e){
            return false;
        }
        return true;
    }

    public Boolean findAvatar(Integer id){
        StringBuffer avatarFileName = new StringBuffer("avatars/");
        avatarFileName.append(id);
        avatarFileName.append(".jpg");
        File avatarFile = new File(avatarFileName.toString());
        try{
            FileInputStream fileInputStream = new FileInputStream(avatarFile);
            avatar = new byte[fileInputStream.available()];
            fileInputStream.read(avatar);
            fileInputStream.close();

            avatarBase64 = Base64.getEncoder().encodeToString(avatar);
        }catch (IOException e){
            return false;
        }

        return true;
    }
}
