package tarea1Teleferico;

public class LineaPlateada extends Teleferico{
    public LineaPlateada() {
        this.name="Linea Plateada";
    }

    @Override
    void iniciandoRecorrido() {
        System.out.println("Inicio de recorrido: 3am");
    }

    @Override
    void llegadaAParada() {
        System.out.println("Llegada a parada Aukisamaña");
    }

    @Override
    void terminandoRecorrido() {
        System.out.println("Fin de recorrido: 12pm");
    }
}
