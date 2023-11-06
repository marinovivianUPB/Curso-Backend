public class PokemonAttackFactory {

    public static PokemonAttack create(String pokemonName) {
        PokemonAttack pokemon;
        switch (pokemonName.toLowerCase()) {
            case "pikachu":
                pokemon = new Pikachu();
        }

    }
}
