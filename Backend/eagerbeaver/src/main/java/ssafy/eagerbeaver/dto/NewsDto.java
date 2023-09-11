package ssafy.eagerbeaver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import ssafy.eagerbeaver.domain.NewsCategory;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class NewsDto {
	private String title;
	private String summary1;
	private String summary2;
	private String summary3;
	private String publishedDt;
	private NewsCategory category;
}
