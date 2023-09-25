package ssafy.eagerbeaver.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ssafy.eagerbeaver.exception.game.GameDataNotFoundException;
import ssafy.eagerbeaver.exception.game.GameErrorCode;
import ssafy.eagerbeaver.exception.game.GameResultArgumentException;
import ssafy.eagerbeaver.exception.game.GameResultSaveFailedException;
import ssafy.eagerbeaver.exception.user.UserException;

@RestControllerAdvice
public class ExControllerAdvice {

    @ExceptionHandler
    public ResponseEntity<ErrorResult> gameDataNotFoundExHandle(GameDataNotFoundException e) {
        ErrorResult errorResult = new ErrorResult(GameErrorCode.GAME_DATA_NOT_FOUND.getCode(),e.getMessage());
        return new ResponseEntity<>(errorResult, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResult> gameResultArgumentExHandle(GameResultArgumentException e) {
        ErrorResult errorResult = new ErrorResult(GameErrorCode.GAME_RESULT_ARGUMENT_ERROR.getCode(),e.getMessage());
        return new ResponseEntity<>(errorResult, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResult> gameResultSaveFailedExHandle(GameResultSaveFailedException e) {
        ErrorResult errorResult = new ErrorResult(GameErrorCode.GAME_RESULT_SAVE_FAILED.getCode(), e.getMessage());
        return new ResponseEntity<>(errorResult, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResult> userExHandle(UserException e) {
        ErrorResult errorResult = new ErrorResult("USER-EX",e.getMessage());
        return new ResponseEntity<>(errorResult, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResult> argExHandle(IllegalArgumentException e) {
        ErrorResult errorResult = new ErrorResult("ARG-EX", e.getMessage());
        return new ResponseEntity<>(errorResult, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResult> exHandle(Exception e) {
        ErrorResult errorResult = new ErrorResult("EX",e.getMessage());
        return new ResponseEntity<>(errorResult, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}