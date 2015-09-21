package br.com.meuspedidos.common;

import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;

import br.com.meuspedidos.model.Mail;

public class MailUtils {
	private MailSender mailSender;
	 
	public void setMailSender(MailSender mailSender) {
		this.mailSender = mailSender;
	}
 
	public void send(Mail mail) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom(mail.getFrom());
		message.setTo(mail.getTo());
		message.setSubject(mail.getSubject());
		message.setText(mail.getMsg());
		mailSender.send(message);	
	}
}
