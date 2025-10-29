export class Feedback {
  static async create(data) {
    // Mock create feedback - in real app, call API
    console.log('Feedback created:', data);
    return data;
  }
}
