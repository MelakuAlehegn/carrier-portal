const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Please add email address'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add password'],
  },
  phone_number: {
    type: String,
  },
  role: {
    type: String,
    enum: ['candidate', 'employee', 'admin', 'superadmin'],
    default: 'candidate',
  },
  status: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  secondary_email: {
    type: String,
  },
  secondary_phone_number: {
    type: String,
  },
  linkedin_url: {
    type: String,
  },
  photo: {
    type: String,
  },
  skills: [{
    type: String,
  }],
  education: [{
    institution_name: {
      type: String,
    },
    field_of_study: {
      type: String,
    },
    educational_status: {
      type: String,
    },
    period: {
      type: {
        start_date: {
          type: Date,
        },
        end_date: {
          type: Date,
        },
      },
    },
  }],
  experience: [{
    company_name: {
      type: String,
    },
    job_title: {
      type: String,
    },
    work_timeframe: {
      type: {
        start_date: {
          type: Date,
        },
        end_date: {
          type: Date,
        },
      },
    },
    reference_phone: {
      type: String,
    },
    reference_name: {
      type: String,
    },
    reference_email: {
      type: String,
    },
    reference_job_title: {
      type: String,
    },
    responsibility: {
      type: String,
    },
  }],
  documents: [{
    type: {
      type: String,
      enum: ['CV', 'Certificate', 'Endorsement', 'Degree'],
    },
    file: {
      type: String, // Assuming you are storing the file as a base64 string
    },
  }],

  verified: {
    type: Boolean,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
