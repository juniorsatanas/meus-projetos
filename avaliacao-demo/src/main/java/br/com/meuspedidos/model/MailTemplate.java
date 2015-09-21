package br.com.meuspedidos.model;

public class MailTemplate {
	public static final Integer MAIL_1_MIN = 7;
	public static final Integer MAIL_2_MIN = 7;
	public static final Integer MAIL_3_MIN = 7;

	private String message1;
	private String message2;
	private String message3;
	private String message4;
	
	private String subject;
	private String from;
	
	public String getMessage1() {
		return message1;
	}
	public void setMessage1(String message1) {
		this.message1 = message1;
	}
	public String getMessage2() {
		return message2;
	}
	public void setMessage2(String message2) {
		this.message2 = message2;
	}
	public String getMessage3() {
		return message3;
	}
	public void setMessage3(String message3) {
		this.message3 = message3;
	}
	public String getMessage4() {
		return message4;
	}
	public void setMessage4(String message4) {
		this.message4 = message4;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getMessageByScore(Evaluation evaluation){
		String message    = "";
		Integer totalHtml = evaluation.getNoteHtml(); 
		Integer totalCss  = evaluation.getNoteCss(); 
		Integer totalJs   = evaluation.getNoteJavascript();
		
		Integer totalPython = evaluation.getNotePython();
		Integer totalDjango = evaluation.getNoteDjango();
		
		Integer totalAndroid = evaluation.getNoteAndroid();
		Integer totaliOS     = evaluation.getNoteiOS();
		
		boolean isMail1 = (totalHtml    >= MailTemplate.MAIL_1_MIN) && (totalCss    >= MailTemplate.MAIL_1_MIN) && (totalJs >= MailTemplate.MAIL_1_MIN);
		boolean isMail2 = (totalPython  >= MailTemplate.MAIL_2_MIN) && (totalDjango >= MailTemplate.MAIL_2_MIN);
		boolean isMail3 = (totalAndroid >= MailTemplate.MAIL_3_MIN) || (totaliOS    >= MailTemplate.MAIL_3_MIN);
		
		if(isMail1) 
			message = this.getMessage1();
		else if(isMail2) 
			message = this.getMessage2();
		else if(isMail3) 
			message = this.getMessage3();
		else 
			message = this.getMessage4();
		
		return message;
	}
}
