import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { constructKeyboardButton, KeyboardButton, keyboardButtonToTlObject } from "./1_keyboard_button.ts";

export interface ReplyKeyboardMarkup {
  keyboard: KeyboardButton[][];
  isPersistent?: boolean;
  resizeKeyboard?: boolean;
  oneTimeKeyboard?: boolean;
  inputFieldPlaceholder?: string;
  selective?: boolean;
}

export function constructReplyKeyboardMarkup(keyboard_: types.ReplyKeyboardMarkup): ReplyKeyboardMarkup {
  const rows = new Array<KeyboardButton[]>();
  for (const row_ of keyboard_.rows.map((v) => v[as](types.KeyboardButtonRow))) {
    const row = new Array<KeyboardButton>();
    for (const button_ of row_.buttons) {
      row.push(constructKeyboardButton(button_));
    }
    rows.push(row);
  }
  return {
    resizeKeyboard: keyboard_.resize || false,
    oneTimeKeyboard: keyboard_.singleUse || false,
    selective: keyboard_.selective || false,
    isPersistent: keyboard_.persistent || false,
    keyboard: rows,
  };
}

export function replyKeyboardMarkupToTlObject(replyMarkup: ReplyKeyboardMarkup) {
  const rows_ = new Array<types.KeyboardButtonRow>();
  for (const row of replyMarkup.keyboard) {
    const row_ = new Array<types.TypeKeyboardButton>();
    for (const button of row) {
      row_.push(keyboardButtonToTlObject(button));
    }
    rows_.push(new types.KeyboardButtonRow({ buttons: row_ }));
  }
  return new types.ReplyKeyboardMarkup({
    resize: replyMarkup.resizeKeyboard || undefined,
    singleUse: replyMarkup.oneTimeKeyboard || undefined,
    selective: replyMarkup.selective || undefined,
    persistent: replyMarkup.isPersistent || undefined,
    rows: rows_,
  });
}
