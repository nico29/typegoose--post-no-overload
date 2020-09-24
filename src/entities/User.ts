import { getModelForClass, post, prop} from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

@post<User>(['find', 'findOne'], (user) => {
  return user;
})
class User extends TimeStamps{
  @prop() name: string;
}

export default getModelForClass(User);
