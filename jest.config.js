module.exports = {
  name: 'booking-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/booking-portal',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
