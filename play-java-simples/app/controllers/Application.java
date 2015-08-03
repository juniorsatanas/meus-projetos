package controllers;

import models.CupomDesconto;
import play.data.Form;
import play.mvc.Controller;
import play.mvc.Result;

public class Application extends Controller{

    public Result index() {
        return null;//redirect(routes.Application.incluirCupomDesconto());
    }
    
    public static Result incluir() {
    	CupomDesconto cupom = Form.form(CupomDesconto.class).bindFromRequest().get();
    	cupom.save();
    	//outes.Application
    	
    	return TODO;
    } 
}
