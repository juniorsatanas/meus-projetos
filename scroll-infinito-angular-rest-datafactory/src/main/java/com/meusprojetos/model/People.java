package com.meusprojetos.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class People
{
	private String name;
	private String adress;

	public People()
	{
	}

	public People(String name, String adress)
	{
		super();
		this.name = name;
		this.adress = adress;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getAdress()
	{
		return adress;
	}

	public void setAdress(String adress)
	{
		this.adress = adress;
	}
}
