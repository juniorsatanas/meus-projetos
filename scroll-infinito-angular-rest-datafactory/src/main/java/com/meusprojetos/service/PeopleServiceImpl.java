package com.meusprojetos.service;

import java.util.List;

import javax.inject.Inject;

import com.meusprojetos.dao.PeopleDaoImpl;
import com.meusprojetos.model.People;

public class PeopleServiceImpl
{
	@Inject
	private PeopleDaoImpl peopleDao;
	public List<People> search(Integer indexIni, Integer indexEnd)
	{
		List<People> people = peopleDao.search(indexIni, indexEnd);
		return people;
	}
}
