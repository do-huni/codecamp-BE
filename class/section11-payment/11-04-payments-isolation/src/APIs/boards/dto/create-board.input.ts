import { Field, InputType } from "@nestjs/graphql";
// 인풋: InputType 리턴: ObjectType

@InputType()
export class CreateBoardInput{
	@Field(()=> String)
	writer: string;
	
	@Field(()=> String)	
	title: string;
	
	@Field(()=> String)
	contents: string;
}