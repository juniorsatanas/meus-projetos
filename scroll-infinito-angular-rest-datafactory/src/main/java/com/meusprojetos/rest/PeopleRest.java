package com.meusprojetos.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.meusprojetos.model.People;
import com.meusprojetos.service.PeopleServiceImpl;

@Path("/people")
public class PeopleRest
{
	@Inject
	private PeopleServiceImpl peopleService;
	
	@GET
	@Path("/{ini}/{end}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<People> search(@PathParam("ini") Integer indexIni, @PathParam("end") Integer indexEnd){
		List<People> people = peopleService.search(indexIni, indexEnd);
		return people;
	}
}
