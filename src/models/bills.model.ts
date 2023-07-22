import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Ledger} from './ledger.model';
import {Party} from './party.model';


@model()
export class Bills extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  billNo: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'number',
  })
  outstanding?: number;

  @property({
    type: 'string',
  })
  status?: string;

  @hasMany(() => Ledger)
  ledgers: Ledger[];

  @belongsTo(() => Party)
  partyId: string;

  // @beforeSave()
  // static async updateOutstanding(ctx: BeforeSaveContext<Bills>) {
  //   if (ctx.isNewInstance) {
  //     const partyModel = await ctx.repositoryGetter().parties();
  //     const party = await partyModel.findById(ctx.instance?.partyId);
  //     if (party) {
  //       party.outstanding = (party.outstanding || 0) + ctx.instance?.amount;
  //       await partyModel.update(party);
  //     }
  //   }
  // }

  constructor(data?: Partial<Bills>) {
    super(data);
  }

}

export interface BillsRelations {
  // describe navigational properties here
}

export type BillsWithRelations = Bills & BillsRelations;

