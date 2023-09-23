package ssafy.eagerbeaver.controller;

import java.util.Map;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ssafy.eagerbeaver.dto.UserInfoSetReq;
import ssafy.eagerbeaver.service.UserService;
import ssafy.eagerbeaver.util.JwtUtil;
import ssafy.eagerbeaver.util.UserContextHolder;

@Slf4j
@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;

    @GetMapping("/auth/login")
    public ResponseEntity<?> login(@RequestParam String code) {
        String accessToken = userService.getKakaoAccessToken(code);
        String email = userService.getKakaoMemberInfo(accessToken);
        Map<String, Object> userInfo = userService.login(email);

        return new ResponseEntity<>(userInfo, HttpStatus.OK);
    }

    /*
    닉네임 중복 검사 for debounce
     */
    @GetMapping("/nickname/{nickname}")
    public ResponseEntity<?> checkNickname(@PathVariable String nickname) {
        boolean isDuplicate = userService.checkNickname(nickname);
        return new ResponseEntity<>(isDuplicate, HttpStatus.OK);
    }

    /*
    닉네임 설정
     */
    @PutMapping("/user")
    public ResponseEntity<?> setNickname(@RequestBody UserInfoSetReq req) {
        Short id = UserContextHolder.userIdHolder.get();
        int result = userService.setUserInfo(id, req.getNickname(), req.getImgNum());
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }
}
