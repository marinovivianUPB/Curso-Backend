package ejemplo01;

public class Pokemon {
    String name="ejemplo01.Pokemon";
    double scapeProbability = 0.3;
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getEscapeProbability() {
        return scapeProbability;
    }

    public void setEscapeProbability(double scapeProbability) {
        this.scapeProbability = scapeProbability;
    }
}
