package br.com.meuspedidos.model;

public class Mail {
	
	private String from; 
	private String to;
	private String subject;
	private String msg;
	
	public Mail() {

	}
	public Mail(String subject, String msg) {
		super();
		this.subject = subject;
		this.msg = msg;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
}
