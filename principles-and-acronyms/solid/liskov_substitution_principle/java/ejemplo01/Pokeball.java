package ejemplo01;

class Pokeball {
    public void catchPokemon(Pokemon pokemon) {
        System.out.println("Intentas atrapar a " + pokemon.getName());
        // Implementación básica para atrapar Pokémon
    }
}

class GreatBall extends Pokeball {

    double probability = 0.5;
    @Override
    public void catchPokemon(Pokemon pokemon) {
        super.catchPokemon(pokemon);
        if (pokemon.getEscapeProbability() < probability) {
            System.out.println(pokemon.getName() + " fue atrapado con una ejemplo01.GreatBall!");
        } else {
            System.out.println(pokemon.getName() + " escapó de la ejemplo01.GreatBall.");
        }
    }
}

class UltraBall extends Pokeball {
    double probability = 0.2;
    @Override
    public void catchPokemon(Pokemon pokemon) {
        super.catchPokemon(pokemon);
        if (pokemon.getEscapeProbability() < probability) {
            System.out.println(pokemon.getName() + " fue atrapado con una ejemplo01.UltraBall!");
        } else {
            System.out.println(pokemon.getName() + " escapó de la ejemplo01.UltraBall.");
        }
    }
}