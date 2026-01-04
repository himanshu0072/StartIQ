import UserBackground from "../models/UserBackground.js";

export const saveOrUpdateBackground = async (req, res) => {
  try {
    const userId = req.user.id;

    const background = await UserBackground.findOneAndUpdate(
      { userId },
      {
        ...req.body,
        userId,
        meta: { completed: true, step: 1 },
      },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      message: "Background details saved",
      data: background,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save background details",
    });
  }
};

export const getBackgroundStatus = async (req, res) => {
  const userId = req.user.id;

  const exists = await UserBackground.exists({ userId });

  res.json({
    completed: !!exists,
  });
};
