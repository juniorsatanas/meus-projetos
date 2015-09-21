import junit.framework.TestCase;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import br.com.meuspedidos.model.Evaluation;
import br.com.meuspedidos.model.Mail;
import br.com.meuspedidos.model.MailTemplate;

/**
 * @author emirliz
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"/mail-properties.xml"})
public class TestEvaluationMailTemplate extends TestCase implements ApplicationContextAware{
	ApplicationContext context;
	Evaluation evaluation1;
	Evaluation evaluation2;
	Evaluation evaluation3;
	Evaluation evaluation4;
	
	@Override
    public void setApplicationContext(ApplicationContext context) throws BeansException{
		this.context = context;
    }
	
	@BeforeClass
	public static void init() {
		
	}
	
	@Before
	public void setUp() {
		this.evaluation1 = new Evaluation("Rafael Costa", new Mail("Test subject", "Test message"), new Integer(7), new Integer(7), new Integer(7), new Integer(7),  new Integer(7), new Integer(7), new Integer(7));
		this.evaluation2 = new Evaluation("Jael Cruel", new Mail("Test subject", "Test message"), new Integer(1), new Integer(1), new Integer(1), new Integer(7),  new Integer(7), new Integer(5), new Integer(3));
		this.evaluation3 = new Evaluation("Fernando Viana", new Mail("Test subject", "Test message"), new Integer(3), new Integer(4), new Integer(8), new Integer(10), new Integer(3), new Integer(6), new Integer(9));
		this.evaluation4 = new Evaluation("Fabinho", new Mail("Test subject", "Test message"), new Integer(2), new Integer(6), new Integer(7), new Integer(8),  new Integer(5), new Integer(5), new Integer(6));
	}
	
	@After
	public void tearDown() {
		
	}
	
	@Test
	public void testMailMessageByScore() {
	    MailTemplate mailTemplate = (MailTemplate) context.getBean("properties");
	    
	    String message1 = mailTemplate.getMessageByScore(evaluation1);
	    assertEquals(message1, mailTemplate.getMessage1());
	    
	    String message2 = mailTemplate.getMessageByScore(evaluation2);
	    assertEquals(message2, mailTemplate.getMessage2());
	    
	    String message3 = mailTemplate.getMessageByScore(evaluation3);
	    assertEquals(message3, mailTemplate.getMessage3());
	    
	    String message4 = mailTemplate.getMessageByScore(evaluation4);
	    assertEquals(message4, mailTemplate.getMessage4());
	}
}
