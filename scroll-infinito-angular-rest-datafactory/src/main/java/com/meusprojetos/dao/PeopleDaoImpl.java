package com.meusprojetos.dao;

import java.util.List;

import com.meusprojetos.mock.PeopleMock;
import com.meusprojetos.model.People;

public class PeopleDaoImpl
{
	public List<People> search(Integer indexIni, Integer indexEnd)
	{
		List<People> people = PeopleMock.getInstance().search(indexIni, indexEnd);
		return people;
	}
}
