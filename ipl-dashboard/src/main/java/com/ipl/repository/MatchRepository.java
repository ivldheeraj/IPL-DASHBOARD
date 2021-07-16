package com.ipl.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ipl.model.Match;

public interface MatchRepository extends CrudRepository<Match, Long> {

	List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1,String teamName2,Pageable pageable);

//	List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc
//	(String teamName1,LocalDate date1,LocalDate date2
//	,String teamName2,LocalDate date3,LocalDate date4);
//	
	@Query("SELECT M FROM Match M WHERE (M.team1 = :teamName OR M.team2 =:teamName) and M.date between :dateStart and :dateEnd order by date desc")
	List<Match> getMatchesByTeamBetweenDates(
			@Param("teamName") String teamName,
			@Param("dateStart") LocalDate dateStart,
			@Param("dateEnd") LocalDate dateEnd);
	
	default List<Match> findLatestMatchesByTeam(String teamName,int count){
		return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
	}
}
