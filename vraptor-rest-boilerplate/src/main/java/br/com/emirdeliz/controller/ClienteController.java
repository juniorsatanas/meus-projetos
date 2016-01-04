package br.com.emirdeliz.controller;

import static br.com.caelum.vraptor.view.Results.json;

import java.io.IOException;
import java.io.Serializable;

import javax.inject.Inject;

import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import br.com.emirdeliz.dao.ClienteDao;
import br.com.emirdeliz.model.Cliente;

@Controller
public class ClienteController implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Inject
	private Result result;

	@Inject
	private ClienteDao clienteDao;

	@Post
	@Consumes(value={"application/json"})
	public void salvar(Cliente cliente) throws ClassNotFoundException, IOException {
		this.clienteDao.salvar(cliente);
		result.use(json()).withoutRoot().from(cliente).serialize();
	}

	@Get
	public void buscar() {
		result.use(json()).withoutRoot().from(this.clienteDao.buscar()).serialize();
	}

	@Get
	public Cliente visualizar(Cliente perfil) {
		return this.clienteDao.visualizar(perfil);
	}

	@Delete
	public void remover(Cliente cliente) {
		this.clienteDao.remover(cliente);
	}
}
