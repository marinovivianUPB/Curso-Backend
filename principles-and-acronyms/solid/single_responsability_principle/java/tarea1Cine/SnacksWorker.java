package tarea1Cine;

public class SnacksWorker implements IConcessionStandWorker{
    @Override
    public void restockItems() {
        System.out.println("Los items fueron reabastecidos");
    }

    @Override
    public void serveSnack() {
        System.out.println("Aquí tiene su snack!!!");
    }

    @Override
    public void processPayment() {
        System.out.println("Procesando el pago...");
        System.out.println("El pago ha sido procesado!");
    }
}
