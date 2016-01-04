package br.com.emirdeliz.dao;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.RequestScoped;

import br.com.emirdeliz.model.Cliente;

@RequestScoped
public class ClienteDao {
	
	public void salvar(Cliente cliente) throws ClassNotFoundException, IOException {
		
	}

	public List<Cliente> buscar() {
		List<Cliente> cliente = new ArrayList<Cliente>();
		cliente.add(new Cliente("Pedro Ivo", "Rua Mariana Liz 899, Joinville, SC"));
		cliente.add(new Cliente("Alberto Pereira", "Rua Amorin 104, Blumenau, SC"));
        return cliente;
    }

	public Cliente visualizar(Cliente perfil) {
        return null;
    }

	public void remover(Cliente cliente) {
	
	}
}
