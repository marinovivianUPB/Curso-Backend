package tarea1Cine;

public class Main {
    public static void main(String [] args){
        ProjectionOperator juan = new ProjectionOperator();
        SnacksWorker pedro = new SnacksWorker();
        TicketSeller luis = new TicketSeller();

        juan.startProjection();

        pedro.restockItems();

        luis.checkTicketAvailability();
    }
}
