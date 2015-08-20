package com.meusprojetos.mock;

import java.util.ArrayList;
import java.util.List;

import org.fluttercode.datafactory.impl.DataFactory;

import com.meusprojetos.model.People;

public class PeopleMock
{
	private static List<People> peopleMock;
	
	private static PeopleMock instance;
	
	public PeopleMock()
	{
		PeopleMock.peopleMock = new ArrayList<People>();
		DataFactory df = new DataFactory();
        for (int i = 0; i < 3000; i++)      
            PeopleMock.peopleMock.add(new People(df.getFirstName() + " "+ df.getLastName(), df.getAddress()));
	} 
	
	public static PeopleMock getInstance()
	{
		if(instance == null)
			instance = new PeopleMock();
		
		return instance;
	}
	
	public List<People> search(Integer indexIni, Integer indexEnd)
	{
		return PeopleMock.peopleMock.subList(indexIni, indexEnd + 1);
	}
}
