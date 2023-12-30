import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
	@PrimaryGeneratedColumn("increment") //increment => AUTO INCREMENT uuid => UUID
	number: number;
	@Column()
	writer: string;
	@Column()
	title: string;
	@Column()
	contents: string;
}