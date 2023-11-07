package tarea1Teleferico;

public class LineaAzul extends Teleferico{

    public LineaAzul(){
        this.name="Linea Azul";
    }
    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: 4am");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada Satélite");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: 11pm");
    }
}
