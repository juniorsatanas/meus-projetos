package br.com.meuspedidos.model;

public class Evaluation {
	
	private String name;
	private Mail mail;
	private Integer noteHtml;
	private Integer noteCss;
	private Integer noteJavascript;
	private Integer notePython;
	private Integer noteDjango;
	private Integer noteiOS;
	private Integer noteAndroid;
	
	public Evaluation(){
		
	}
	public Evaluation(String name, Mail mail, Integer noteHtml, Integer noteCss, Integer noteJavascript,
			Integer notePython, Integer noteDjango, Integer noteiOS, Integer noteAndroid) {
		super();
		this.name = name;
		this.mail = mail;
		this.noteHtml = noteHtml;
		this.noteCss = noteCss;
		this.noteJavascript = noteJavascript;
		this.notePython = notePython;
		this.noteDjango = noteDjango;
		this.noteiOS = noteiOS;
		this.noteAndroid = noteAndroid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Mail getMail() {
		return mail;
	}
	public void setMail(Mail mail) {
		this.mail = mail;
	}
	public Integer getNoteHtml() {
		return noteHtml;
	}
	public void setNoteHtml(Integer noteHtml) {
		this.noteHtml = noteHtml;
	}
	public Integer getNoteCss() {
		return noteCss;
	}
	public void setNoteCss(Integer noteCss) {
		this.noteCss = noteCss;
	}
	public Integer getNoteJavascript() {
		return noteJavascript;
	}
	public void setNoteJavascript(Integer noteJavascript) {
		this.noteJavascript = noteJavascript;
	}
	public Integer getNotePython() {
		return notePython;
	}
	public void setNotePython(Integer notePython) {
		this.notePython = notePython;
	}
	public Integer getNoteDjango() {
		return noteDjango;
	}
	public void setNoteDjango(Integer noteDjango) {
		this.noteDjango = noteDjango;
	}
	public Integer getNoteiOS() {
		return noteiOS;
	}
	public void setNoteiOS(Integer noteiOS) {
		this.noteiOS = noteiOS;
	}
	public Integer getNoteAndroid() {
		return noteAndroid;
	}
	public void setNoteAndroid(Integer noteAndroid) {
		this.noteAndroid = noteAndroid;
	}
}
