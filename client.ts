import { Connection } from "./connection/connection.ts";
import { Transport } from "./transport/transport.ts";
import { ConnectionTCP } from "./connection/connection_tcp.ts";
import { TransportAbridged } from "./transport/transport_abridged.ts";
import { Function } from "./tl/3_functions.ts";
import {
  packUnencryptedMessage,
  unpackUnencryptedMessage,
} from "./utilities/1_tl.ts";
import { bigIntFromBuffer } from "./utilities/0_bigint.ts";
import { TLReader } from "./tl/3_tl_reader.ts";

export class Client {
  protected connection: Connection;
  protected transport: Transport;
  dcId = (2 + 10000) * +1;

  constructor() {
    this.connection = new ConnectionTCP("149.154.167.40", 80);
    this.transport = new TransportAbridged(this.connection);
  }

  async connect() {
    await this.connection.open();
    await this.transport.initialize();
  }

  async invoke(function_: Function) {
    await this.transport.send(packUnencryptedMessage(function_.serialize()));
    const buffer = await this.transport.receive();
    if (buffer.length == 4) {
      const int = bigIntFromBuffer(buffer, true, true);
      if (int == -404n) {
        throw new Error("-404");
      }
    }
    const { message } = unpackUnencryptedMessage(buffer);
    const reader = new TLReader(message);
    return reader.readObject();
  }
}