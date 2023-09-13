package ssafy.eagerbeaver.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GameLogDto {
	private short userId;
	private String cityName;
	private int price;
	private int num;
	private double rate;
	private int turn;

	public GameLogDto (short userId, String cityName, int price, int num, double rate, int turn){
		this.userId = userId;
		this.cityName = cityName;
		this.price = price;
		this.num = num;
		this.rate = rate;
		this.turn = turn;
	}
}
