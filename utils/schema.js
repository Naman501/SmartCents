import { integer, pgTable, varchar, serial } from 'drizzle-orm/pg-core'; // ✅ use correct imports

// ✅ Budget schema
export const Budgets = pgTable('budgets', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  amount: varchar('amount', { length: 255 }).notNull(),
  icon: varchar('icon', { length: 255 }),
  createdBy: varchar('createdBy', { length: 255 }).notNull(),
});

// ✅ Income schema
export const Incomes = pgTable('incomes', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  amount: varchar('amount', { length: 255 }).notNull(),
  icon: varchar('icon', { length: 255 }),
  createdBy: varchar('createdBy', { length: 255 }).notNull(),
});

// ✅ Expenses schema
export const Expenses = pgTable('expenses', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  amount: varchar('amount', { length: 255 }).notNull(),
  budgetID: integer('budgetID').references(() => Budgets.id), // ✅ fixed typo: `refrences` ➝ `references`
  createdBy: varchar('createdBy', { length: 255 }).notNull(),
});
