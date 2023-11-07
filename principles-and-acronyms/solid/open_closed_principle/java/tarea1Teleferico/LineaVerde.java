package tarea1Teleferico;

public class LineaVerde extends Teleferico{
    public LineaVerde() {
        this.name="Linea Verde";
    }

    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: 7am");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada Alto Obrajes");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: 10pm");
    }
}
