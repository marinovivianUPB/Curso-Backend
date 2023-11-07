package tarea1Cine;

import java.util.Random;

public class ProjectionOperator implements IMovieProjector{

    private Random rand = new Random();
    @Override
    public void startProjection() {
        System.out.println("INICIANDO LA PROYECCIÓN :)");
    }

    @Override
    public void stoProjection() {
        System.out.println("DETENIENDO LA PROYECCIÓN :(");

    }

    @Override
    public void checkProjectorStatus() {
        System.out.println("Revisando proyector...");
        boolean check = rand.nextBoolean();
        if(check){
            System.out.println("EL PROYECTOR FUNCIONA CORRECTAMENTE");
        } else{
            System.out.println("EL PROYECTOR NO FUNCIONA!!!");
        }
    }
}
