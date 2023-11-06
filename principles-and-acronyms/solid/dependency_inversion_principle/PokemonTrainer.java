public class PokemonTrainer {
    private PokemonAttack attackStrategy;

    public PokemonTrainer(PokemonAttack attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    void commandToAttack() {
        attackStrategy.execute();
    }
}
