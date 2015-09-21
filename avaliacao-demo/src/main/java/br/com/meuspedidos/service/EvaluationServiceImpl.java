package br.com.meuspedidos.service;

import java.io.IOException;

import javax.xml.parsers.ParserConfigurationException;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import br.com.meuspedidos.common.MailUtils;
import br.com.meuspedidos.model.Mail;
import br.com.meuspedidos.model.MailTemplate;
import br.com.meuspedidos.model.Evaluation;

@Service
public class EvaluationServiceImpl implements EvaluationService{
	public Boolean sendMail(Evaluation evaluation) throws ParserConfigurationException, SAXException, IOException{
		Mail mail = compileEmailByType(evaluation);
		ApplicationContext context = new ClassPathXmlApplicationContext("spring-mail.xml");
	    MailUtils mailService = (MailUtils) context.getBean("mailMail");
	    mailService.send(mail);
		return true;
	}
	
	public Mail compileEmailByType(Evaluation evaluation) throws ParserConfigurationException, SAXException, IOException{
		Mail mail = evaluation.getMail(); 
		String[] mailData = readFilePropertiesMail(evaluation);
		mail.setSubject(mailData[0]);
		mail.setMsg(mailData[1]);
		mail.setFrom(mailData[2]);
		return mail;
	}
	
	public String[] readFilePropertiesMail(Evaluation evaluation) throws ParserConfigurationException, SAXException, IOException{
		ApplicationContext context = new ClassPathXmlApplicationContext("mail-properties.xml");
	    MailTemplate mailTemplate = (MailTemplate) context.getBean("properties");
		String message    = mailTemplate.getMessageByScore(evaluation);
		String subject    = mailTemplate.getSubject();
		String from       = mailTemplate.getFrom();
		String[] mailData = {subject, message, from};
		return mailData;
	}
}
