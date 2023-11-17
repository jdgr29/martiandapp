import amqp from 'amqplib';

class RabbitMQConnection {
  private static instance: RabbitMQConnection;
  private connection: amqp.Connection | undefined;
  private channel: amqp.Channel | undefined;

  private constructor() {}

  public static async getInstance(): Promise<RabbitMQConnection> {
    if (!RabbitMQConnection.instance) {
      RabbitMQConnection.instance = new RabbitMQConnection();
      await RabbitMQConnection.instance.connect();
    }
    return RabbitMQConnection.instance;
  }

  private async connect() {
    const rabbitMQURL = process.env.RABBITMQ_URL!;
    this.connection = await amqp.connect(rabbitMQURL);
    this.channel = await this.connection.createChannel();
  }

  public getChannel(): amqp.Channel | undefined {
    return this.channel;
  }

  public async close() {
    await this.connection?.close();
  }
}

export default RabbitMQConnection