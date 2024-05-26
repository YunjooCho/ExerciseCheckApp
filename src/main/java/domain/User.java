package domain;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Getter @Setter
public class User {
    private long usId;              // 식별ID
    private String usUserName;      // 회원 이름
    private String usPassword;      // 회원 비밀번호
    private long usScore;           // 회원 총점
    private int usDelete;           // 회원 정보 삭제 여부
    private Date usCreateDate;      // 회원 생성 일자
    private Date usUpdateDate;      // 회원 수정 일자

    public User() {
    }

    public User(String usUserName, String usPassword, long usScore) {
        this.usUserName = usUserName;
        this.usPassword = usPassword;
        this.usScore = usScore;
    }
}
