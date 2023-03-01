export default {
  async getDocuments() {
    const { default: data} = await import('../mock/documents');
    return data.documents;
  },
  async getSections() {
    const { default: data} = await import('../mock/documents');
    return data.sections;
  }
};