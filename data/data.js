export default {
    "Result": true,
    "Reason": "",
    "Claims": [{
        "Claimtype": {
            "name": "Travel",
            "id": "3"
        },
        "Claimtypedetail": [{
            "claimfield_id": "16",
            "id": "9",
            "claimtype_id": "3",
            "Claimfield": {
                "id": "16",
                "name": "trvlfromdistrict",
                "label": "From District",
                "type": "DropDown",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 22:34:44",
                "modified": "2013-10-24 22:34:44",
                "Claimfieldoption": [{
                    "name": "DELHI",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "16",
                    "id": "274"
                }, {
                    "name": "KANPUR",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "16",
                    "id": "275"
                }, {
                    "name": "api_district",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "16",
                    "id": "280"
                }]
            }
        }, {
            "claimfield_id": "18",
            "id": "10",
            "claimtype_id": "3",
            "Claimfield": {
                "id": "18",
                "name": "trvlfromcitytext",
                "label": "From City",
                "type": "SingleLineTextAllCaps",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 22:34:44",
                "modified": "2014-04-12 14:47:25",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "17",
            "id": "11",
            "claimtype_id": "3",
            "Claimfield": {
                "id": "17",
                "name": "trvltodistrict",
                "label": "To District",
                "type": "DropDown",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 22:34:44",
                "modified": "2013-10-24 22:34:44",
                "Claimfieldoption": [{
                    "name": "DELHI",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "17",
                    "id": "276"
                }, {
                    "name": "KANPUR",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "17",
                    "id": "277"
                }, {
                    "name": "api_district",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "17",
                    "id": "281"
                }]
            }
        }, {
            "claimfield_id": "19",
            "id": "12",
            "claimtype_id": "3",
            "Claimfield": {
                "id": "19",
                "name": "trvltocitytext",
                "label": "To City",
                "type": "SingleLineTextAllCaps",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 22:34:44",
                "modified": "2014-04-12 14:47:12",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "9",
            "id": "13",
            "claimtype_id": "3",
            "Claimfield": {
                "id": "9",
                "name": "trvlmode",
                "label": "Mode of Travel",
                "type": "DropDown",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:37:01",
                "modified": "2013-07-12 22:37:01",
                "Claimfieldoption": [{
                    "name": "Company Vehicle",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "9",
                    "id": "19"
                }, {
                    "name": "Train",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "1",
                    "claimfield_id": "9",
                    "id": "21"
                }, {
                    "name": "Bus",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "1",
                    "claimfield_id": "9",
                    "id": "22"
                }, {
                    "name": "Flight",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "9",
                    "id": "23"
                }, {
                    "name": "Car",
                    "label": "Car",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "9",
                    "id": "272"
                }, {
                    "name": "Taxi",
                    "label": "Taxi",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "9",
                    "id": "273"
                }, {
                    "name": "Motor Cycle",
                    "label": "Motor Cycle",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "9",
                    "id": "284"
                }]
            }
        }, {
            "claimfield_id": "10",
            "id": "28",
            "claimtype_id": "3",
            "Claimfield": {
                "id": "10",
                "name": "trvlclass",
                "label": "Class of Travel",
                "type": "DropDown",
                "required": "1",
                "isdependant": "1",
                "created": "2013-07-12 22:37:36",
                "modified": "2013-07-13 01:38:30",
                "Claimfieldoption": [{
                    "name": "NA",
                    "label": "",
                    "belongsto": "19",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "20"
                }, {
                    "name": "Chair Car",
                    "label": "",
                    "belongsto": "21",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "24"
                }, {
                    "name": "I AC Train",
                    "label": "",
                    "belongsto": "21",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "25"
                }, {
                    "name": "II AC Train",
                    "label": "",
                    "belongsto": "21",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "26"
                }, {
                    "name": "III tier Train",
                    "label": "",
                    "belongsto": "21",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "27"
                }, {
                    "name": "Sleeper Bus",
                    "label": "",
                    "belongsto": "22",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "28"
                }, {
                    "name": "AC Bus",
                    "label": "",
                    "belongsto": "22",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "29"
                }, {
                    "name": "Ordinary Bus",
                    "label": "",
                    "belongsto": "22",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "30"
                }, {
                    "name": "NA",
                    "label": "",
                    "belongsto": "23",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "31"
                }, {
                    "name": "Sleeper",
                    "label": "",
                    "belongsto": "21",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "283"
                }, {
                    "name": "General",
                    "label": "General",
                    "belongsto": "21",
                    "hasmany": "0",
                    "claimfield_id": "10",
                    "id": "285"
                }]
            }
        }, {
            "claimfield_id": "11",
            "id": "29",
            "claimtype_id": "3",
            "Claimfield": {
                "id": "11",
                "name": "trvlremark",
                "label": "Remark",
                "type": "SingleLineText",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:39:20",
                "modified": "2013-07-12 22:39:20",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "23",
            "id": "34",
            "claimtype_id": "3",
            "Claimfield": {
                "id": "23",
                "name": "trvlkms",
                "label": "KMs",
                "type": "SingleLineTextNumeric",
                "required": "1",
                "isdependant": "0",
                "created": "2014-10-15 23:18:18",
                "modified": "2014-10-15 23:18:18",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "24",
            "id": "35",
            "claimtype_id": "3",
            "Claimfield": {
                "id": "24",
                "name": "trvlrate",
                "label": "Rate (in Rs.)",
                "type": "SingleLineTextNumeric",
                "required": "1",
                "isdependant": "0",
                "created": "2014-10-15 23:18:53",
                "modified": "2014-10-15 23:18:53",
                "Claimfieldoption": []
            }
        }]
    }, {
        "Claimtype": {
            "name": "Daily Allowance",
            "id": "4"
        },
        "Claimtypedetail": [{
            "claimfield_id": "22",
            "id": "8",
            "claimtype_id": "4",
            "Claimfield": {
                "id": "22",
                "name": "workingstatus",
                "label": "Working Status",
                "type": "DropDown",
                "required": "1",
                "isdependant": "0",
                "created": "2014-02-03 00:00:00",
                "modified": "2014-02-03 00:00:00",
                "Claimfieldoption": [{
                    "name": "HEADQUARTERS",
                    "label": "HEADQUARTERS",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "22",
                    "id": "286"
                }, {
                    "name": "OUTSTATION",
                    "label": "OUTSTATION",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "22",
                    "id": "287"
                }]
            }
        }, {
            "claimfield_id": "20",
            "id": "14",
            "claimtype_id": "4",
            "Claimfield": {
                "id": "20",
                "name": "dadistrict",
                "label": "District",
                "type": "DropDown",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 14:57:00",
                "modified": "2013-10-24 14:57:00",
                "Claimfieldoption": [{
                    "name": "DELHI",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "278"
                }, {
                    "name": "KANPUR",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "279"
                }, {
                    "name": "api_district",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "282"
                }]
            }
        }, {
            "claimfield_id": "21",
            "id": "15",
            "claimtype_id": "4",
            "Claimfield": {
                "id": "21",
                "name": "dacitytext",
                "label": "City",
                "type": "SingleLineTextAllCaps",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 14:57:00",
                "modified": "2014-04-12 14:47:37",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "12",
            "id": "16",
            "claimtype_id": "4",
            "Claimfield": {
                "id": "12",
                "name": "dadays",
                "label": "No. of Days",
                "type": "SingleLineTextNumeric",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:39:40",
                "modified": "2013-07-12 22:39:40",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "11",
            "id": "31",
            "claimtype_id": "4",
            "Claimfield": {
                "id": "11",
                "name": "trvlremark",
                "label": "Remark",
                "type": "SingleLineText",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:39:20",
                "modified": "2013-07-12 22:39:20",
                "Claimfieldoption": []
            }
        }]
    }, {
        "Claimtype": {
            "name": "Lodging and Boarding",
            "id": "5"
        },
        "Claimtypedetail": [{
            "claimfield_id": "20",
            "id": "17",
            "claimtype_id": "5",
            "Claimfield": {
                "id": "20",
                "name": "dadistrict",
                "label": "District",
                "type": "DropDown",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 14:57:00",
                "modified": "2013-10-24 14:57:00",
                "Claimfieldoption": [{
                    "name": "DELHI",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "278"
                }, {
                    "name": "KANPUR",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "279"
                }, {
                    "name": "api_district",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "282"
                }]
            }
        }, {
            "claimfield_id": "21",
            "id": "18",
            "claimtype_id": "5",
            "Claimfield": {
                "id": "21",
                "name": "dacitytext",
                "label": "City",
                "type": "SingleLineTextAllCaps",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 14:57:00",
                "modified": "2014-04-12 14:47:37",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "12",
            "id": "19",
            "claimtype_id": "5",
            "Claimfield": {
                "id": "12",
                "name": "dadays",
                "label": "No. of Days",
                "type": "SingleLineTextNumeric",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:39:40",
                "modified": "2013-07-12 22:39:40",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "11",
            "id": "30",
            "claimtype_id": "5",
            "Claimfield": {
                "id": "11",
                "name": "trvlremark",
                "label": "Remark",
                "type": "SingleLineText",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:39:20",
                "modified": "2013-07-12 22:39:20",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "25",
            "id": "36",
            "claimtype_id": "5",
            "Claimfield": {
                "id": "25",
                "name": "ldgbaseamount",
                "label": "Base Amount (in Rs.)",
                "type": "SingleLineTextNumeric",
                "required": "1",
                "isdependant": "0",
                "created": "2014-10-15 23:26:14",
                "modified": "2014-10-15 23:26:14",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "26",
            "id": "37",
            "claimtype_id": "5",
            "Claimfield": {
                "id": "26",
                "name": "ldgtax",
                "label": "Tax (in Rs.)",
                "type": "SingleLineTextNumeric",
                "required": "0",
                "isdependant": "0",
                "created": "2014-10-15 23:26:14",
                "modified": "2014-10-15 23:26:14",
                "Claimfieldoption": []
            }
        }]
    }, {
        "Claimtype": {
            "name": "Local Conveyance",
            "id": "6"
        },
        "Claimtypedetail": [{
            "claimfield_id": "20",
            "id": "20",
            "claimtype_id": "6",
            "Claimfield": {
                "id": "20",
                "name": "dadistrict",
                "label": "District",
                "type": "DropDown",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 14:57:00",
                "modified": "2013-10-24 14:57:00",
                "Claimfieldoption": [{
                    "name": "DELHI",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "278"
                }, {
                    "name": "KANPUR",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "279"
                }, {
                    "name": "api_district",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "282"
                }]
            }
        }, {
            "claimfield_id": "21",
            "id": "21",
            "claimtype_id": "6",
            "Claimfield": {
                "id": "21",
                "name": "dacitytext",
                "label": "City",
                "type": "SingleLineTextAllCaps",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 14:57:00",
                "modified": "2014-04-12 14:47:37",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "13",
            "id": "22",
            "claimtype_id": "6",
            "Claimfield": {
                "id": "13",
                "name": "localconveymode",
                "label": "Mode of Local Conveyance",
                "type": "DropDown",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:40:41",
                "modified": "2013-07-12 22:40:41",
                "Claimfieldoption": [{
                    "name": "Company Vehicle",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "13",
                    "id": "268"
                }, {
                    "name": "Taxi",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "13",
                    "id": "269"
                }, {
                    "name": "Auto-Rickshaw",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "13",
                    "id": "270"
                }, {
                    "name": "Cycle-Rickshaw",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "13",
                    "id": "271"
                }]
            }
        }, {
            "claimfield_id": "14",
            "id": "23",
            "claimtype_id": "6",
            "Claimfield": {
                "id": "14",
                "name": "localconveytotkm",
                "label": "Total KMS",
                "type": "SingleLineTextNumeric",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:42:37",
                "modified": "2013-07-12 22:42:37",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "11",
            "id": "32",
            "claimtype_id": "6",
            "Claimfield": {
                "id": "11",
                "name": "trvlremark",
                "label": "Remark",
                "type": "SingleLineText",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:39:20",
                "modified": "2013-07-12 22:39:20",
                "Claimfieldoption": []
            }
        }]
    }, {
        "Claimtype": {
            "name": "HRA",
            "id": "7"
        },
        "Claimtypedetail": [{
            "claimfield_id": "20",
            "id": "24",
            "claimtype_id": "7",
            "Claimfield": {
                "id": "20",
                "name": "dadistrict",
                "label": "District",
                "type": "DropDown",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 14:57:00",
                "modified": "2013-10-24 14:57:00",
                "Claimfieldoption": [{
                    "name": "DELHI",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "278"
                }, {
                    "name": "KANPUR",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "279"
                }, {
                    "name": "api_district",
                    "label": "",
                    "belongsto": null,
                    "hasmany": "0",
                    "claimfield_id": "20",
                    "id": "282"
                }]
            }
        }, {
            "claimfield_id": "21",
            "id": "27",
            "claimtype_id": "7",
            "Claimfield": {
                "id": "21",
                "name": "dacitytext",
                "label": "City",
                "type": "SingleLineTextAllCaps",
                "required": "1",
                "isdependant": "0",
                "created": "2013-10-24 14:57:00",
                "modified": "2014-04-12 14:47:37",
                "Claimfieldoption": []
            }
        }, {
            "claimfield_id": "11",
            "id": "33",
            "claimtype_id": "7",
            "Claimfield": {
                "id": "11",
                "name": "trvlremark",
                "label": "Remark",
                "type": "SingleLineText",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:39:20",
                "modified": "2013-07-12 22:39:20",
                "Claimfieldoption": []
            }
        }]
    }, {
        "Claimtype": {
            "name": "Mobile",
            "id": "8"
        },
        "Claimtypedetail": [{
            "claimfield_id": "11",
            "id": "25",
            "claimtype_id": "8",
            "Claimfield": {
                "id": "11",
                "name": "trvlremark",
                "label": "Remark",
                "type": "SingleLineText",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:39:20",
                "modified": "2013-07-12 22:39:20",
                "Claimfieldoption": []
            }
        }]
    }, {
        "Claimtype": {
            "name": "Misc",
            "id": "9"
        },
        "Claimtypedetail": [{
            "claimfield_id": "11",
            "id": "26",
            "claimtype_id": "9",
            "Claimfield": {
                "id": "11",
                "name": "trvlremark",
                "label": "Remark",
                "type": "SingleLineText",
                "required": "1",
                "isdependant": "0",
                "created": "2013-07-12 22:39:20",
                "modified": "2013-07-12 22:39:20",
                "Claimfieldoption": []
            }
        }]
    }]
}