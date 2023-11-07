package tarea1Cine;

import java.util.Random;

public class TicketSeller implements  ITicketSeller{

    private Random rand = new Random();
    @Override
    public void sellTicket() {
        System.out.println("Vendiendo ticket :)");

    }

    @Override
    public int refundTicket() {
        System.out.println("Sentimos mucho que tenga que devolver su ticket :(");

        return 45;
    }

    @Override
    public boolean checkTicketAvailability() {
        System.out.println("Revisando si hay asientos...");
        boolean check = rand.nextBoolean();
        if(check){
            System.out.println("Si tenemos más asientos");
        }else {
            System.out.println("No tenemos más asientos");
        }
        return check;
    }
}
