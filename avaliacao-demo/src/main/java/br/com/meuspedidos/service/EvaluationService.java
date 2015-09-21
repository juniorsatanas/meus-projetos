package br.com.meuspedidos.service;

import java.io.IOException;

import javax.xml.parsers.ParserConfigurationException;

import org.xml.sax.SAXException;

import br.com.meuspedidos.model.Mail;
import br.com.meuspedidos.model.Evaluation;

public interface EvaluationService {
	public Boolean sendMail(Evaluation evaluation) throws ParserConfigurationException, SAXException, IOException;
	public Mail compileEmailByType(Evaluation evaluation) throws ParserConfigurationException, SAXException, IOException;
	public String[] readFilePropertiesMail(Evaluation evaluation) throws ParserConfigurationException, SAXException, IOException;
}
