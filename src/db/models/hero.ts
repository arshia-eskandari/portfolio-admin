import mongoose from "mongoose";

// _id: string
// text: string

export interface IHero extends mongoose.Document {
  text: string;
}

const HeroSchema = new mongoose.Schema<IHero>({
  text: { type: String, required: false },
});

const Hero = mongoose.model<IHero>("Hero", HeroSchema);

export default Hero;
