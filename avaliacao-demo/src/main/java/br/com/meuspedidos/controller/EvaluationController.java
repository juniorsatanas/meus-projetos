package br.com.meuspedidos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.com.meuspedidos.model.Evaluation;
import br.com.meuspedidos.service.EvaluationService;

@Controller
@RequestMapping("/test")
public class EvaluationController {
	
	@Autowired
	EvaluationService evaluationService;
	
	@RequestMapping(method = RequestMethod.POST, value="/send")
	public String printWelcome(Evaluation evaluation) {
		try {
			evaluationService.sendMail(evaluation);
		} catch (Exception e) {
			e.printStackTrace();
			return "unsuccess";
		} 
		return "success";
	}
}